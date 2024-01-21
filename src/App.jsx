
import { Table } from '../Table'
import './App.css'

function App() {
const tableData = [
  ["xyz","abc","pqr","xyz","abc","pqr"],
  ["xyz","abc","pqr","xyz","abc","pqr"],
  ["xyz","abc","pqr"],
  ["xyz","abc","pqr"],
  ["xyz","abc","pqr","xyz","abc","pqr"],
  ["xyz","abc","pqr","xyz","abc","pqr"],
  ["xyz","abc","pqr"],
  ["xyz","abc","pqr","xyz","abc","pqr"],
  ["xyz","abc","pqr"],
]
const tableData2 = [
  ["123","456","456","123","456","456"],
  ["123","456","456","123","456","456"],
  ["123","456","456"],
  ["123","456","456"],
  ["123","456","456","123","456","456"],
  ["123","456","456","123","456","456"],
  ["123","456","456"],
  ["123","456","456","123","456","456"],
  ["123","456","456"],
]
  return (
    <div style={{display:'flex',gap:'5rem'}}>
    <Table rows={tableData}/>
    <Table rows={tableData2}/>
    </div>
  )
}

export default App
