import { useState, useEffect } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import { studentAPI } from './api'

function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)

  const fetchStudents = async () => {
    setLoading(true)
    try {
      const response = await studentAPI.getAll()
      setStudents(response.data.students || [])
    } catch (error) {
      console.error('Error fetching students:', error)
      alert('Error loading students: ' + (error.response?.data?.error || error.message))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const handleStudentAdded = () => {
    fetchStudents()
    setEditingStudent(null)
  }

  const handleEdit = (student) => {
    setEditingStudent(student)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancel = () => {
    setEditingStudent(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
              <p className="text-gray-600 mt-1">Manage student records using REST API</p>
            </div>
            <button
              onClick={fetchStudents}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              🔄 Refresh
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <StudentForm
              onStudentAdded={handleStudentAdded}
              onCancel={handleCancel}
              editingStudent={editingStudent}
            />
          </div>

          {/* List Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Students List</h2>
              <p className="text-gray-600">Total Students: {students.length}</p>
            </div>
            <StudentList
              students={students}
              loading={loading}
              onEdit={handleEdit}
              onRefresh={fetchStudents}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600">
          <p>Student CRUD API Frontend • Built with React & Tailwind CSS</p>
          <p className="text-sm mt-2">Backend: http://127.0.0.1:5000</p>
        </div>
      </footer>
    </div>
  )
}

export default App
