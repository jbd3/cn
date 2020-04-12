
import { useState } from 'react';
import BoardContainer from '../components/BoardContainer'
import Layout from '../components/Layout'

const SideBar = () => {
  return <div>Sidebar</div>
}

export default function Game() {

  const [userRole, updateUserRole] = useState(0);

  return (
    <Layout>
      <main className="flex flex-wrap">
        <BoardContainer className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-5/6 mb-4 bg-gray-400" />
        {/* <SideBar className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500" /> */}
        <style>{`
        `}</style>
      </main>
    </Layout>
  );
}
