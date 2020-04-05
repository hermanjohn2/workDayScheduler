# Work Day Scheduler

A work day scheduler that allows you to map out your scheudle for the day. A great tool to organize your daily work tasks.

## How To Use

1. Click on a time block to add your daily task.
2. Once the task is entered, click the save button on the right side of the block.
3. Fill out the time blocks with your tasks for the day.

## Motivation

The idea behind this project was to take existing HTML/CSS code and create a work day scheduler that has logic to perform certain duties when interacted with.

The main objectives were:

1.  Apply classes to time blocks based on the hour of the day.
2.  Set entered tasks to local storage so that they remain after leaving the page or refreshing.

## Examples of Code

The project was built using jQuery and Moment.js. Get/Set local storage was used to display tasks for entire day despite a user refresh. Local storage is cleared every night to ensure a blank scheduler is presented every morning.
