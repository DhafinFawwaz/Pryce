import Image from 'next/image';
import React, { useState } from 'react';

interface Person {
  username: string;
  role: 'Admin' | 'Member' | 'Elder';
  profileImage: string;
}

interface NewUser {
  username: string;
  role: 'Admin' | 'Member' | 'Elder';
  profileImage: string;
}

const initialPeople: Person[] = [
  {
    username: 'John Doe',
    role: 'Admin',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Jane Smith',
    role: 'Member',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Alice Johnson',
    role: 'Elder',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Bob Brown',
    role: 'Member',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Charlie White',
    role: 'Member',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Emily Davis',
    role: 'Member',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Frank Miller',
    role: 'Admin',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Grace Lee',
    role: 'Elder',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Hannah Scott',
    role: 'Member',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Isaac Brown',
    role: 'Member',
    profileImage: 'https://via.placeholder.com/50',
  },
];

const PeopleCard: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(initialPeople);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', role: 'Admin' });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAddUserModal = () => {
    setIsAddUserModalOpen(!isAddUserModalOpen);
  };

  const handleRoleChange = (index: number, newRole: Person['role']) => {
    const updatedPeople = [...people];
    updatedPeople[index].role = newRole;
    setPeople(updatedPeople);
  };

  const handleAddUser = () => {
    if (newUser.username.trim()) {
      setPeople([...people, newUser as Person]);
      setNewUser({ username: '', role: 'Admin', profileImage: 'https://via.placeholder.com/50' });
      toggleAddUserModal();
    }
  };

  const handleDeleteUser = (index: number) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full md:w-1/3 mt-2">
      <h2 className="text-lg font-semibold mb-2">People on Wallet</h2>
      <ul className="space-y-2">
        {people.slice(0, 4).map((person, index) => (
          <li key={index} className="flex items-center">
            <img
              src={person.profileImage}
              alt={person.username}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex flex-col flex-grow">
              <span className="font-medium">{person.username}</span>
              <span className="text-sm text-gray-500">{person.role}</span>
            </div>
            <select
              value={person.role}
              onChange={(e) => handleRoleChange(index, e.target.value as Person['role'])}
              className="border rounded p-1 ml-2"
            >
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
              <option value="Elder">Elder</option>
            </select>
            {/* <button onClick={() => handleDeleteUser(index)} className="ml-2 p-2 text-red-600 hover:text-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M6 6v12a2 2 0 002 2h8a2 2 0 002-2V6m-2 0H8" />
              </svg>
            </button> */}
          </li>
        ))}
      </ul>
      <button
        onClick={toggleModal}
        className="mt-4 flex justify-end rounded-full w-[35px] h-[35px]"
      >
        <Image 
            src={"/images/edit.svg"}
            width={35}
            height={35}
            alt="Show all user"
        />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-80">
          <div className="bg-white-100 rounded-lg shadow-lg w-11/12 md:w-1/3 max-h-3/4 overflow-auto p-4">
            <h2 className="text-lg font-semibold mb-2">All Users</h2>
            <ul className="space-y-2 max-h-60 overflow-y-auto border bg-white-100 p-2 rounded">
              {people.slice(0, 8).map((person, index) => (
                <li key={index} className="flex items-center">
                  <img
                    src={person.profileImage}
                    alt={person.username}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div className="flex flex-col flex-grow">
                    <span className="font-medium">{person.username}</span>
                    <span className="text-sm text-black">{person.role}</span>
                  </div>
                  <select
                    value={person.role}
                    onChange={(e) => handleRoleChange(index, e.target.value as Person['role'])}
                    className="border rounded p-1 ml-2"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Member">Member</option>
                    <option value="Elder">Elder</option>
                  </select>
                  <button onClick={() => handleDeleteUser(index)} className="ml-2 p-2 text-red-600 hover:text-red-800">
                  <Image 
                        src={"/images/delete.svg"}
                        width={35}
                        height={35}
                        alt="Delete"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleAddUserModal}
              className="mt-4 flex items-center justify-center"
            >
              <Image 
                    src={"/images/add.svg"}
                    width={35}
                    height={35}
                    alt="Delete"
                />
            </button>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isAddUserModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-80">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-4">
            <h2 className="text-lg font-semibold mb-2">Add User</h2>
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              className="border rounded p-2 mb-2 w-full"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value as Person['role'] })}
              className="border rounded p-2 mb-2 w-full"
            >
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
              <option value="Elder">Elder</option>
            </select>
            <button
              onClick={handleAddUser}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
            <button
              onClick={toggleAddUserModal}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleCard;
