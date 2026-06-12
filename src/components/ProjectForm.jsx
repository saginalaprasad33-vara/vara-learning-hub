import { useState } from 'react'

export default function ProjectForm() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Project submitted', form)
    alert(`Project submitted:\n${JSON.stringify(form, null, 2)}`)
    setForm({ name: '', description: '', startDate: '', endDate: '' })
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Project name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
      </div>

      <div className="field">
        <label>Description
          <textarea name="description" value={form.description} onChange={handleChange} />
        </label>
      </div>

      <div className="grid">
        <label>
          Start date
          <input name="startDate" type="date" value={form.startDate} onChange={handleChange} />
        </label>

        <label>
          End date
          <input name="endDate" type="date" value={form.endDate} onChange={handleChange} />
        </label>
      </div>

      <div className="actions">
        <button type="submit">Create Project</button>
      </div>
    </form>
  )
}
