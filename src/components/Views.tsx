/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  ListTodo, 
  User, 
  Bell, 
  LogOut, 
  ShieldCheck,
  Search,
  Filter,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Upload,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { Complaint, ComplaintStatus, View } from '../types';

// --- Mock Data ---
const MOCK_COMPLAINTS: Complaint[] = [
  {
    id: '1',
    title: 'Frequent Power Outages',
    description: 'Power goes out every evening for 2 hours in Sector 4.',
    category: 'Electricity',
    status: 'Pending',
    date: '2026-04-05',
    user: 'John Doe'
  },
  {
    id: '2',
    title: 'Water Leakage on Main Road',
    description: 'Large pipe burst near the city hospital.',
    category: 'Water',
    status: 'In Progress',
    date: '2026-04-06',
    user: 'Jane Smith'
  },
  {
    id: '3',
    title: 'Fiber Optic Cable Cut',
    description: 'Internet is down for the entire block since morning.',
    category: 'Internet',
    status: 'Resolved',
    date: '2026-04-04',
    user: 'Mike Ross'
  },
  {
    id: '4',
    title: 'Potholes on High Street',
    description: 'Multiple large potholes causing traffic issues.',
    category: 'Road',
    status: 'Pending',
    date: '2026-04-07',
    user: 'Sarah Connor'
  }
];

// --- Components ---

const StatusBadge = ({ status }: { status: ComplaintStatus }) => {
  const styles = {
    'Pending': 'status-pending',
    'In Progress': 'status-progress',
    'Resolved': 'status-resolved'
  };
  
  const icons = {
    'Pending': <Clock className="w-3 h-3 mr-1" />,
    'In Progress': <AlertCircle className="w-3 h-3 mr-1" />,
    'Resolved': <CheckCircle2 className="w-3 h-3 mr-1" />
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export const LandingPage = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Resolve</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Home</a>
              <button onClick={() => onNavigate('dashboard')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Dashboard</button>
              <button onClick={() => onNavigate('admin')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Admin</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 hover:text-brand-600 font-medium px-4 py-2">Login</button>
              <button className="bg-brand-600 text-white px-5 py-2 rounded-full font-medium hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">Register</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-600 uppercase bg-brand-50 rounded-full">
              Seamless Complaint Management
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Raise Complaints Easily & <br />
              <span className="gradient-text">Track Status in Real-Time</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              A transparent platform for citizens to report issues and for authorities to resolve them efficiently. Built for modern governance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('submit')}
                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center group"
              >
                Submit Complaint
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                How it Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PlusCircle className="w-8 h-8 text-brand-600" />,
                title: "Easy Submission",
                desc: "Submit your complaints in seconds with our intuitive form and image proof support."
              },
              {
                icon: <Clock className="w-8 h-8 text-purple-600" />,
                title: "Real-time Tracking",
                desc: "Stay updated with live status changes and notifications on your dashboard."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
                title: "Admin Support",
                desc: "Our dedicated admin team ensures every complaint is addressed and resolved promptly."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ShieldCheck className="text-brand-600 w-6 h-6" />
              <span className="text-lg font-bold text-slate-900">Resolve</span>
            </div>
            <div className="flex space-x-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-brand-600">Privacy Policy</a>
              <a href="#" className="hover:text-brand-600">Terms of Service</a>
              <a href="#" className="hover:text-brand-600">Contact Us</a>
            </div>
            <div className="mt-4 md:mt-0 text-slate-400 text-sm">
              © 2026 Resolve Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const Sidebar = ({ currentView, onNavigate, onClose }: { currentView: View, onNavigate: (view: View) => void, onClose?: () => void }) => {
  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { id: 'submit', icon: <PlusCircle className="w-5 h-5" />, label: 'Submit Complaint' },
    { id: 'list', icon: <ListTodo className="w-5 h-5" />, label: 'My Complaints' },
    { id: 'profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
  ];

  const handleNav = (view: View) => {
    onNavigate(view);
    if (onClose) onClose();
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Resolve</span>
          </div>
          {onClose && (
            <button onClick={onClose} className="md:hidden p-2 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id as View)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                currentView === item.id 
                  ? 'bg-brand-50 text-brand-600 font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-6 border-t border-slate-100">
        <button 
          onClick={() => handleNav('landing')}
          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export const Dashboard = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const stats = [
    { label: 'Total Complaints', value: '24', icon: <FileText className="text-brand-600" />, bg: 'bg-brand-50' },
    { label: 'Pending', value: '12', icon: <Clock className="text-amber-600" />, bg: 'bg-amber-50' },
    { label: 'In Progress', value: '8', icon: <AlertCircle className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Resolved', value: '4', icon: <CheckCircle2 className="text-emerald-600" />, bg: 'bg-emerald-50' },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, John!</h1>
          <p className="text-slate-500">Here's what's happening with your complaints.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-slate-600 relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center border border-brand-200">
            <User className="w-6 h-6 text-brand-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Recent Complaints</h2>
          <button 
            onClick={() => onNavigate('list')}
            className="text-brand-600 font-semibold text-sm hover:underline"
          >
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_COMPLAINTS.slice(0, 3).map((complaint) => (
                <tr key={complaint.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900">{complaint.title}</p>
                    <p className="text-xs text-slate-500 truncate max-w-[200px]">{complaint.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{complaint.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={complaint.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {complaint.date}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-brand-600">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const SubmitComplaint = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Submit a Complaint</h1>
        <p className="text-slate-500">Provide details about the issue you're facing.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Complaint Title</label>
            <input 
              type="text" 
              placeholder="e.g., Water leakage in Sector 5"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all appearance-none bg-white">
              <option>Select Category</option>
              <option>Electricity</option>
              <option>Water</option>
              <option>Internet</option>
              <option>Road</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
            <textarea 
              rows={4}
              placeholder="Describe the issue in detail..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Proof (Images)</label>
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-brand-400 transition-colors cursor-pointer group">
              <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:text-brand-500 transition-colors" />
              <p className="text-slate-600 font-medium">Click to upload or drag and drop</p>
              <p className="text-slate-400 text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          <button 
            type="button"
            className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
          >
            Submit Complaint
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export const ComplaintList = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Complaints</h1>
          <p className="text-slate-500">Manage and track all your reported issues.</p>
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search complaints..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none text-sm"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {MOCK_COMPLAINTS.map((complaint, i) => (
          <motion.div
            key={complaint.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-1">
                <h3 className="text-lg font-bold text-slate-900">{complaint.title}</h3>
                <StatusBadge status={complaint.status} />
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <span className="flex items-center"><FileText className="w-3 h-3 mr-1" /> {complaint.category}</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {complaint.date}</span>
              </div>
              <p className="text-slate-600 mt-2 text-sm line-clamp-1">{complaint.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">View Details</button>
              <button className="p-2 text-slate-400 hover:text-red-600 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const AdminPanel = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-500">Overview of all system complaints and resolutions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">All Complaints</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 text-xs font-bold bg-brand-50 text-brand-600 rounded-lg">All</button>
              <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg">Pending</button>
              <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg">Resolved</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">User</th>
                  <th className="px-6 py-4 font-semibold">Complaint</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_COMPLAINTS.map((complaint) => (
                  <tr key={complaint.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                          {complaint.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-slate-900">{complaint.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-900">{complaint.title}</p>
                      <p className="text-xs text-slate-500">{complaint.category}</p>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={complaint.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-md transition-all">
                          <AlertCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-all">
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">System Health</h3>
            <div className="space-y-4">
              {[
                { label: 'Avg. Resolution Time', value: '2.4 Days', color: 'bg-emerald-500' },
                { label: 'User Satisfaction', value: '94%', color: 'bg-brand-500' },
                { label: 'Server Uptime', value: '99.9%', color: 'bg-blue-500' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="font-bold text-slate-900">{item.value}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: item.value.includes('%') ? item.value : '80%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-600 to-purple-600 p-6 rounded-3xl shadow-lg text-white">
            <h3 className="text-lg font-bold mb-2">Need Help?</h3>
            <p className="text-brand-100 text-sm mb-4">Check out the admin documentation for advanced settings.</p>
            <button className="w-full py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl font-bold transition-all">
              View Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
