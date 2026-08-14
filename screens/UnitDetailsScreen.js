import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import styles from '../styles/UnitDetailsScreenStyles';

export default function UnitDetailsScreen({route, units, setUnits, darkMode,}) {
  const selectedUnit = units.find(
    item => item.id === route.params.unit.id
  );

  const tasks = selectedUnit?.tasks || [];

  const [newTask, setNewTask] = useState('');
  const [newSubtask, setNewSubtask] = useState('');

  const [addingTask, setAddingTask] = useState(false);
  const [addingSubtaskFor, setAddingSubtaskFor] = useState(null);

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

  const updateUnitTasks = updatedTasks => {
    setUnits(currentUnits =>
      currentUnits.map(item =>
        item.id === selectedUnit.id
          ? {
              ...item,
              tasks: updatedTasks,
            }
          : item
      )
    );
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

  return (
    <View style={[styles.container,darkMode && styles.darkContainer,]}>

      <Text style={[styles.unitName,darkMode && styles.darkText,]}>
        {selectedUnit?.name}
      </Text>

      <Text style={[styles.progress,darkMode && styles.darkText,]}>
        {calculateProgress()}% completed
      </Text>

      <Text style={[styles.taskCount,darkMode && styles.darkSecondaryText]}>
        {calculateCompleted()} / {calculateTotal()} tasks completed
      </Text>

      <Text style={[styles.deadline,darkMode && styles.darkSecondaryText]}>
        Target date: {selectedUnit?.deadline}
      </Text>

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

    </View>
  );
}