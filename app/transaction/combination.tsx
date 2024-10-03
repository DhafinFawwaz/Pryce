"use client";

import { useState } from "react";

interface AddTransactionForm {
    amount: number;
    description: string;
    category: string;
    status: string;
    personId: string;
    date: Date; 
    walletId: number;
    isProject: boolean;
}

interface EditTransactionForm {
    amount: number;
    description: string;
    category: string;
    status: string;
    walletId: number;
    isProject: boolean;
    subId: number;
}

interface DeleteTransactionForm {
    walletId: number;
    subId: number;
}

export function combination(){

    async function AddTransaction(formData: AddTransactionForm) {
        try {
            const response = await fetch('/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add transaction');
            }

        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    }

    async function DeleteTransaction(formData: DeleteTransactionForm) {
        try {
            const response = await fetch('/api/transactions', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add transaction');
            }

        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    }

    async function EditTransaction(formData: EditTransactionForm) {
        try {
            const response = await fetch(`/api/transactions/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to edit transaction');
            }

        } catch (error) {
            console.error('Error editing transaction:', error);
        }
    }

}