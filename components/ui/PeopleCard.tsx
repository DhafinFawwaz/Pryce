import React from 'react';

interface Person {
  username: string;
  role: string;
  profileImage: string; // utk skrg url
}

const people: Person[] = [
  {
    username: 'John Doe',
    role: 'Admin',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Jane Smith',
    role: 'User',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Alice Johnson',
    role: 'Moderator',
    profileImage: 'https://via.placeholder.com/50',
  },
  {
    username: 'Bob Brown',
    role: 'User',
    profileImage: 'https://via.placeholder.com/50',
  },
];

const PeopleCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full md:w-1/3 mt-2">
      <h2 className="text-lg font-semibold mb-2">People on Wallet</h2>
      <ul className="space-y-2">
        {people.map((person, index) => (
          <li key={index} className="flex items-center">
            <img
              src={person.profileImage}
              alt={person.username}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex flex-col">
              <span className="font-medium">{person.username}</span>
              <span className="text-sm text-gray-500">{person.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleCard;
