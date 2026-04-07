/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ComplaintStatus = 'Pending' | 'In Progress' | 'Resolved';

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: 'Electricity' | 'Water' | 'Internet' | 'Road' | 'Other';
  status: ComplaintStatus;
  date: string;
  user: string;
  proofUrl?: string;
}

export type View = 'landing' | 'dashboard' | 'submit' | 'list' | 'admin';
