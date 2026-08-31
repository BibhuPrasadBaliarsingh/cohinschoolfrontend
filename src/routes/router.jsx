import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, useOutletContext } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CRMLayout from '../layouts/CRMLayout';
import PrivateRoute from './PrivateRoute';
import PageLoadingSpinner from '../components/PageLoadingSpinner';

// Direct import for fast home render
import HomePage from '../pages/HomePage';

// Lazy loaded page components
const AboutPage = lazy(() => import('../pages/AboutPage'));
const MissionPage = lazy(() => import('../pages/MissionPage'));
const AcademicsPage = lazy(() => import('../pages/AcademicsPage'));
const FacilitiesPage = lazy(() => import('../pages/FacilitiesPage'));
const AdmissionsPage = lazy(() => import('../pages/AdmissionsPage'));
const FacultyPage = lazy(() => import('../pages/FacultyPage'));
const SmartCampusPage = lazy(() => import('../pages/SmartCampusPage'));
const PortalsPage = lazy(() => import('../pages/PortalsPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NewsEventsPage = lazy(() => import('../pages/NewsEventsPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const CohenTalkPage = lazy(() => import('../pages/CohenTalkPage'));
const ScientificAdvisoryBoardPage = lazy(() => import('../pages/ScientificAdvisoryBoardPage'));

const LoginPage = lazy(() => import('../pages/LoginPage'));
const UnauthorizedPage = lazy(() => import('../pages/UnauthorizedPage'));
const PrincipalDashboard = lazy(() => import('../pages/dashboards/PrincipalDashboard'));
const TeacherDashboard = lazy(() => import('../pages/dashboards/TeacherDashboard'));
const StudentDashboard = lazy(() => import('../pages/dashboards/StudentDashboard'));
const ParentDashboard = lazy(() => import('../pages/dashboards/ParentDashboard'));

// CRM Lazy Components
const CRMDashboard = lazy(() => import('../pages/crm/Dashboard'));
const CRMLeads = lazy(() => import('../pages/crm/Leads'));
const CRMLeadDetail = lazy(() => import('../pages/crm/LeadDetail'));
const CRMLeadPipeline = lazy(() => import('../pages/crm/LeadPipeline'));
const CRMFollowUps = lazy(() => import('../pages/crm/FollowUps'));
const CRMAdmissions = lazy(() => import('../pages/crm/Admissions'));
const CRMStudents = lazy(() => import('../pages/crm/Students'));
const CRMMarketing = lazy(() => import('../pages/crm/Marketing'));
const CRMReports = lazy(() => import('../pages/crm/Reports'));
const CRMStaffUsers = lazy(() => import('../pages/crm/StaffUsers'));
const CRMSettings = lazy(() => import('../pages/crm/Settings'));

// Helper adapter component to bridge Outlet context to page props seamlessly
function RouteAdapter({ Component }) {
  const context = useOutletContext() || {};
  return (
    <Suspense fallback={<PageLoadingSpinner message="Loading page..." />}>
      <Component {...context} />
    </Suspense>
  );
}

function RootErrorBoundary() {
  return (
    <div className="min-h-screen bg-navy-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-navy-900 border border-gold-500/30 rounded-3xl p-8 shadow-2xl">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Something went wrong</h2>
        <p className="text-sm text-white/70 mb-6">An unhandled error occurred. Please refresh or return to home.</p>
        <button
          type="button"
          onClick={() => (window.location.href = '/')}
          className="px-6 py-2.5 bg-gold-500 text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      { index: true, element: <RouteAdapter Component={HomePage} /> },
      { path: 'about', element: <RouteAdapter Component={AboutPage} /> },
      { path: 'mission', element: <RouteAdapter Component={MissionPage} /> },
      { path: 'academics', element: <RouteAdapter Component={AcademicsPage} /> },
      { path: 'facilities', element: <RouteAdapter Component={FacilitiesPage} /> },
      { path: 'admissions', element: <RouteAdapter Component={AdmissionsPage} /> },
      { path: 'faculty', element: <RouteAdapter Component={FacultyPage} /> },
      { path: 'management', element: <RouteAdapter Component={FacultyPage} /> },
      { path: 'page/11', element: <RouteAdapter Component={ScientificAdvisoryBoardPage} /> },
      { path: 'scientific-advisory-board', element: <RouteAdapter Component={ScientificAdvisoryBoardPage} /> },
      { path: 'smart-campus', element: <RouteAdapter Component={SmartCampusPage} /> },
      { path: 'portals', element: <RouteAdapter Component={PortalsPage} /> },
      { path: 'careers', element: <RouteAdapter Component={CareersPage} /> },
      { path: 'contact', element: <RouteAdapter Component={ContactPage} /> },
      { path: 'news', element: <RouteAdapter Component={NewsEventsPage} /> },
      { path: 'news-events', element: <RouteAdapter Component={NewsEventsPage} /> },
      { path: 'terms', element: <RouteAdapter Component={TermsPage} /> },
      { path: 'terms-and-conditions', element: <RouteAdapter Component={TermsPage} /> },
      { path: 'cohentalk', element: <RouteAdapter Component={CohenTalkPage} /> },
      { path: 'cohen-talk', element: <RouteAdapter Component={CohenTalkPage} /> },

      { path: 'login', element: <RouteAdapter Component={LoginPage} /> },
      { path: 'unauthorized', element: <RouteAdapter Component={UnauthorizedPage} /> },

      // CRM Protected Route Tree
      {
        path: 'admin/*',
        element: (
          <PrivateRoute allowedRoles={['admin', 'Super Admin', 'Admin', 'Counsellor', 'Admission Staff']}>
            <CRMLayout />
          </PrivateRoute>
        ),
        children: [
          { path: 'dashboard', element: <RouteAdapter Component={CRMDashboard} /> },
          { path: 'leads', element: <RouteAdapter Component={CRMLeads} /> },
          { path: 'leads/:id', element: <RouteAdapter Component={CRMLeadDetail} /> },
          { path: 'pipeline', element: <RouteAdapter Component={CRMLeadPipeline} /> },
          { path: 'followups', element: <RouteAdapter Component={CRMFollowUps} /> },
          { path: 'admissions', element: <RouteAdapter Component={CRMAdmissions} /> },
          { path: 'students', element: <RouteAdapter Component={CRMStudents} /> },
          { path: 'marketing/*', element: <RouteAdapter Component={CRMMarketing} /> },
          { path: 'reports', element: <RouteAdapter Component={CRMReports} /> },
          { path: 'users', element: <RouteAdapter Component={CRMStaffUsers} /> },
          { path: 'settings', element: <RouteAdapter Component={CRMSettings} /> },
          { path: '*', element: <Navigate to="dashboard" replace /> }
        ]
      },

      // Dashboards
      {
        path: 'principal/dashboard',
        element: (
          <PrivateRoute allowedRoles={['admin', 'principal']}>
            <RouteAdapter Component={PrincipalDashboard} />
          </PrivateRoute>
        )
      },
      {
        path: 'teacher/dashboard',
        element: (
          <PrivateRoute allowedRoles={['admin', 'principal', 'teacher', 'Teacher']}>
            <RouteAdapter Component={TeacherDashboard} />
          </PrivateRoute>
        )
      },
      {
        path: 'teacher',
        element: (
          <PrivateRoute allowedRoles={['admin', 'principal', 'teacher', 'Teacher']}>
            <RouteAdapter Component={TeacherDashboard} />
          </PrivateRoute>
        )
      },
      {
        path: 'student/dashboard',
        element: (
          <PrivateRoute allowedRoles={['admin', 'Super Admin', 'principal', 'student', 'Student']}>
            <RouteAdapter Component={StudentDashboard} />
          </PrivateRoute>
        )
      },
      { path: 'student', element: <Navigate to="/student/dashboard" replace /> },
      {
        path: 'parent/dashboard',
        element: (
          <PrivateRoute allowedRoles={['admin', 'Super Admin', 'principal', 'parent', 'Parent']}>
            <RouteAdapter Component={ParentDashboard} />
          </PrivateRoute>
        )
      },
      {
        path: 'parent',
        element: (
          <PrivateRoute allowedRoles={['admin', 'Super Admin', 'principal', 'parent', 'Parent']}>
            <RouteAdapter Component={ParentDashboard} />
          </PrivateRoute>
        )
      },
      { path: 'citizen/dashboard', element: <Navigate to="/login" replace /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);

export default router;
