import Link from "next/link";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h3><Link href="/dashboard/users">View Users</Link></h3>
        <h3><Link href="/dashboard/analytics">View Analytics</Link></h3>
    </div>
  )
}

export default Dashboard
