import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import styles from '../styles/UnitDetailsScreenStyles';

export default function UnitDetailsScreen({route, units, setUnits, darkMode, navigation, API_URL, saveUnitsLocally,}) {
  const selectedUnit = units.find(
    item => item.id === route.params.unit.id
  );

  const tasks = selectedUnit?.tasks || [];

  const [newTask, setNewTask] = useState('');
  const [newSubtask, setNewSubtask] = useState('');

  const [addingTask, setAddingTask] = useState(false);
  const [addingSubtaskFor, setAddingSubtaskFor] = useState(null);

  const [editingUnit, setEditingUnit] = useState(false); //controls whether viewving or editing

  const [editedName, setEditedName] = useState(
    selectedUnit?.name || ''
  ); //stores what the user types into the name field

  const [editedDeadline, setEditedDeadline] = useState(
    selectedUnit?.deadline || ''
  ); //to store what user types into the deadline field

  const [actionError, setActionError] = useState(null);
  const [savingChanges, setSavingChanges] = useState(false);

  const calculateTotal = () => {
    return tasks.reduce(
      (total, task) => total + task.subtasks.length,
      0
    );
  };

  const calculateCompleted = () => {
    return tasks.reduce(
      (total, task) =>
        total +
        task.subtasks.filter(
          subtask => subtask.completed
        ).length,
      0
    );
  };

  const calculateProgress = () => {
    const total = calculateTotal();

    if (total === 0) {
      return 0;
    }

    return Math.round(
      (calculateCompleted() / total) * 100
    );
  };

  //update unit task function
  const updateUnitTasks = updatedTasks => {

    const updatedUnit = {
      ...selectedUnit, //keeps existing unit data
      tasks: updatedTasks, //replaces only the tasks with the new version
    };

    //clear old error and start loading before fetch()
    setActionError(null);
    setSavingChanges(true);

    fetch(`${API_URL}/${selectedUnit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUnit),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update tasks');
        }
        return response.json();
      })

      .then(updatedData => {
        setUnits(currentUnits => {
          const updatedUnits = currentUnits.map(item =>
            item.id === selectedUnit.id
              ? updatedData
              : item
          );

          saveUnitsLocally(updatedUnits);

          return updatedUnits;
        });

        setSavingChanges(false);

      })
      .catch(error => {
        setActionError(error.message);
        setSavingChanges(false);
      });
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    const task = {
      id: Date.now().toString(),
      title: newTask,
      subtasks: [],
    };

    updateUnitTasks([
      ...tasks,
      task,
    ]);

    setNewTask('');
    setAddingTask(false);
  };

  const addSubtask = taskId => {
    if (newSubtask.trim() === '') {
      return;
    }

    const updatedTasks = tasks.map(task => {
      if (task.id !== taskId) {
        return task;
      }

      return {
        ...task,
        subtasks: [
          ...task.subtasks,
          {
            id: Date.now().toString(),
            title: newSubtask,
            completed: false,
          },
        ],
      };
    });

    updateUnitTasks(updatedTasks);

    setNewSubtask('');
    setAddingSubtaskFor(null);
  };

  const toggleSubtask = (taskId, subtaskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id !== taskId) {
        return task;
      }

      return {
        ...task,
        subtasks: task.subtasks.map(subtask =>
          subtask.id === subtaskId
            ? {
                ...subtask,
                completed: !subtask.completed,
              }
            : subtask
        ),
      };
    });

    updateUnitTasks(updatedTasks);
  };

  //DELETE function
  const deleteUnit = () => {

    setActionError(null);
    setSavingChanges(true);

    //to GET only one unit to delete:
    fetch(`${API_URL}/${selectedUnit.id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete unit');
      }

      setUnits(currentUnits => {

        //after mockAPI deletes, remove it from Reach state, so React can re-render Home
        const updatedUnits = currentUnits.filter(
          unit => unit.id !== selectedUnit.id
        );

        saveUnitsLocally(updatedUnits);

        return updatedUnits;
      });

            setSavingChanges(false);      
            navigation.navigate('Home');
          })
          .catch(error => {
            setActionError(error.message);
            setSavingChanges(false);
          });
      };

  //PUT function
  const updateUnit = () => {

    setActionError(null);
    setSavingChanges(true);

    const updatedUnit = {
      name: editedName,
      deadline: editedDeadline,
    };

    fetch(`${API_URL}/${selectedUnit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUnit), //tells mockAPI what its new value should be
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update unit');
        }

        return response.json();
      })
      .then(updatedData => {

        setUnits(currentUnits => {

          const updatedUnits = currentUnits.map(unit =>
            unit.id === selectedUnit.id
              ? {
                  ...unit,
                  ...updatedData,
                }
              : unit
          ); ////map() finds the matching unti and replaces its properties with the values returned by mockAPI

          saveUnitsLocally(updatedUnits);

          return updatedUnits;
        });

        setSavingChanges(false);  
        setEditingUnit(false);
        })
        .catch(error => {
          setActionError(error.message);
          setSavingChanges(false);
        });
    };

  return (
    <View style={[styles.container,darkMode && styles.darkContainer,]}>

      {editingUnit ? (
    <TextInput
      style={styles.input}
      value={editedName}
      onChangeText={setEditedName}
    />
  ) : (
    <Text style={[styles.unitName, darkMode && styles.darkText]}>
      {selectedUnit?.name}
    </Text>
  )}

      <Text style={[styles.progress,darkMode && styles.darkText,]}>
        {calculateProgress()}% completed
      </Text>

      <Text style={[styles.taskCount,darkMode && styles.darkSecondaryText]}>
        {calculateCompleted()} / {calculateTotal()} tasks completed
      </Text>

                    
      {actionError && (
        <Text>
          {actionError}
        </Text>
      )} 

      {editingUnit ? (
        <TextInput
          style={styles.input}
          value={editedDeadline}
          onChangeText={setEditedDeadline}
        />
      ) : (
        <Text style={[styles.deadline, darkMode && styles.darkSecondaryText]}>
          Target date: {selectedUnit?.deadline}
        </Text>
      )}

      {editingUnit ? (
        <TouchableOpacity
          style={styles.saveButton}
          disabled={savingChanges}
          onPress={updateUnit}
        >
          <Text style={styles.buttonText}>
            {savingChanges ? 'Saving...' : 'Save Changes'}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setEditingUnit(true)}
        >
          <Text>Edit Unit</Text>
        </TouchableOpacity>
)}

      <Text style={[styles.sectionTitle,darkMode && styles.darkText,]}>
        Major Tasks
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.taskCard,darkMode && styles.darkCard,]}>

            <Text style={[styles.taskTitle,darkMode && styles.darkText,]}>
              {item.title}
            </Text>

            {item.subtasks.map(subtask => (
              <TouchableOpacity
                key={subtask.id}
                style={styles.subtaskRow}
                onPress={() =>
                  toggleSubtask(
                    item.id,
                    subtask.id
                  )
                }
              >

                <Text style={styles.checkbox}>
                  {subtask.completed
                    ? '☑'
                    : '☐'}
                </Text>

                <Text
                  style={[
                    styles.subtaskText,darkMode && styles.darkText,
                    subtask.completed &&
                      styles.completedSubtask,
                  ]}
                >
                  {subtask.title}
                </Text>

              </TouchableOpacity>
            ))}

            {addingSubtaskFor === item.id ? (

              <View style={styles.addTaskContainer}>

                <TextInput
                  style={styles.input}
                  placeholder="Enter subtask"
                  value={newSubtask}
                  onChangeText={setNewSubtask}
                />

                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() =>
                    addSubtask(item.id)
                  }
                >
                  <Text style={styles.buttonText}>
                    Save Subtask
                  </Text>
                </TouchableOpacity>

              </View>

            ) : (

              <TouchableOpacity
                onPress={() =>
                  setAddingSubtaskFor(item.id)
                }
              >
                <Text style={styles.addSubtaskText}>
                  + Add Subtask
                </Text>
              </TouchableOpacity>

            )}

          </View>
        )}
      />

      {addingTask ? (

        <View style={styles.addTaskContainer}>

          <TextInput
            style={styles.input}
            placeholder="Enter task name"
            value={newTask}
            onChangeText={setNewTask}
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={addTask}
          >
            <Text style={styles.buttonText}>
              Save Task
            </Text>
          </TouchableOpacity>

        </View>

      ) : (

        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            setAddingTask(true)
          }
        >
          <Text style={styles.buttonText}>
            + Add Major Task
          </Text>
        </TouchableOpacity>

      )}

      <TouchableOpacity style={styles.addButton}
        disabled={savingChanges}
        onPress={deleteUnit}
      >
        <Text>
          {savingChanges ? 'Please wait...' : 'Delete Unit'}
        </Text>
      </TouchableOpacity>
      

    </View>
  );
}