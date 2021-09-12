import React, { useLayoutEffect } from 'react'
import TaskItem from './Taskitem'
import {Task} from '../Types'

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {

  // 引数に更新するタスク
  //チェック機能  mapでイテレートしidが同じものはdoneが切り替わるようにする
  const handleDone = (task: Task) =>{
    setTasks(prev => prev.map(t =>
      t.id === task.id
      ?{ ...task, done: !task.done}
      : t
      ))
  }

  //削除機能の作成
  const handleDelete =(task: Task) =>{
    //idが合致しないものだけをリターンする
    setTasks(prev => prev.filter(t =>
      t.id !== task.id))
  }
  return (
    <div className="inner">
      {
        tasks.length <= 0 ? '登録されたTODOはありません。' :
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem
            key={task.id}
            task={task}
            handleDone={handleDone}
            handleDelete={handleDelete}
            />
          ))
          }
        </ul>
      }
    </div>

  )
}

export default TaskList;
