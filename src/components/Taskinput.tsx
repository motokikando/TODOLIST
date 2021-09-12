import React, { useState } from 'react';
import {Task} from '../Types'

//TasksとsetTasksをpropsで受け取れるように設定
type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>

}

//TaskInputコンポーネントで設定したpropsを使えるようにする
const TaskInput: React.FC<Props> = ({ tasks, setTasks}) => {
  const [ inputTitle, setInputTitle ] = useState('')
  //初期値に
  const [count, setCount] =useState(tasks.length +1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  //追加ボタンを押した時にTasksに追加した項目が追加されるようにする
  const handleSubmit =() => {
    setCount(count + 1)
    //新しく追加するタスクを定義
    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false
    }
    //setTasksで作成したNewTaskを追加
    setTasks([newTask, ...tasks])
    //処理の最後にTitleをクリア
    setInputTitle('')

  }

  return(
    <div className="input-form">
      <div className='inner'>
        <input
        type="text"
        className="input"
        value={inputTitle}
        onChange={handleInputChange}//buttonにonClickイベントを追加してhundleSubmitイベントを追加できるようにする
        />
        <button onClick={handleSubmit} className = "btn is-primary">追加</button>
      </div>
    </div>
  )
}
export default TaskInput;
