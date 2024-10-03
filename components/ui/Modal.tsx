// Modal.tsx
import React from 'react';

interface Person {
  username: string;
  role: string;
  profileImage: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  people: Person[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, people }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2 max-h-[80vh] overflow-y-auto transition-all transform animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">All People</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-2xl">
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-2">
          {people.map((person, index) => (
            <li key={index} className="flex items-center py-2">
              <img
                src={person.profileImage}
                alt={person.username}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <span className="font-medium text-lg">{person.username}</span>
                <span className="text-sm text-gray-500">{person.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
