import React from 'react';
import {Task} from '../Types'

type Props = {
  task: Task
  //タスクを引数として受け取りリターンはないのでvoidを指定　　
  handleDone: (task: Task) =>void
  handleDelete: (task: Task) =>void
}

const TaskItem: React.FC<Props> = ({task, handleDone, handleDelete}) => {
  return (
    // doneプロパティがtrueの時はClassnameが付与されるようにする
    //checkboxのonclickイベントでhundledoneが切り替わるようにする
    //handleDoneは引数にタスクを渡す必要があるので関数の形にする
    //defaultCheckedで初期の設定をしておく
    //削除ボタンのイベントにhundleDeleteボタンを追加
    <li className={task.done ? 'done': ''}>
      <label>
        <input
            type="checkbox"
            className="checkbox-input"
            onClick={() => handleDone(task)}
            defaultChecked={ task.done}
            />

        <span className="checkbox-label">{task.title}</span>
      </label>

      <button
        onClick={() => handleDelete(task)}
        className="btn is-delete"
        >削除</button>
    </li>
  )
}


export default TaskItem;
