import { studentAPI } from '../api'

export default function StudentList({ students, loading, onEdit, onRefresh }) {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await studentAPI.delete(id)
        onRefresh()
      } catch (error) {
        alert('Error deleting student: ' + (error.response?.data?.error || error.message))
      }
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (students.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500 text-lg">No students found. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Branch</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Group</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Roll Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 text-sm text-gray-900">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{student.branch}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {student.group}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{student.rollNumber || '-'}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{student.email || '-'}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onEdit(student)}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded mr-2 transition-colors text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded transition-colors text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
