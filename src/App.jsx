import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import Modals from "./components/Modals";

import PageLoadingSpinner, { TopRouteLoader } from "./components/PageLoadingSpinner";
import HomePage from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const AcademicsPage = lazy(() => import("./pages/AcademicsPage"));
const FacilitiesPage = lazy(() => import("./pages/FacilitiesPage"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const SmartCampusPage = lazy(() => import("./pages/SmartCampusPage"));
const PortalsPage = lazy(() => import("./pages/PortalsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NewsEventsPage = lazy(() => import("./pages/NewsEventsPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const LoginPage = lazy(() => import("./pages/LoginPage"));
const UnauthorizedPage = lazy(() => import("./pages/UnauthorizedPage"));
const PrincipalDashboard = lazy(
  () => import("./pages/dashboards/PrincipalDashboard"),
);
const TeacherDashboard = lazy(
  () => import("./pages/dashboards/TeacherDashboard"),
);
const StudentDashboard = lazy(
  () => import("./pages/dashboards/StudentDashboard"),
);
const ParentDashboard = lazy(
  () => import("./pages/dashboards/ParentDashboard"),
);

// Admin CRM Components & Pages
import Sidebar from "./components/crm/Sidebar";
import Topbar from "./components/crm/Topbar";

const CRMDashboard = lazy(() => import("./pages/crm/Dashboard"));
const CRMLeads = lazy(() => import("./pages/crm/Leads"));
const CRMLeadDetail = lazy(() => import("./pages/crm/LeadDetail"));
const CRMLeadPipeline = lazy(() => import("./pages/crm/LeadPipeline"));
const CRMFollowUps = lazy(() => import("./pages/crm/FollowUps"));
const CRMAdmissions = lazy(() => import("./pages/crm/Admissions"));
const CRMStudents = lazy(() => import("./pages/crm/Students"));
const CRMMarketing = lazy(() => import("./pages/crm/Marketing"));
const CRMReports = lazy(() => import("./pages/crm/Reports"));
const CRMStaffUsers = lazy(() => import("./pages/crm/StaffUsers"));
const CRMSettings = lazy(() => import("./pages/crm/Settings"));

function CRMLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white text-slate-800 font-sans">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar setMobileOpen={setMobileSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Routes>
            <Route path="dashboard" element={<CRMDashboard />} />
            <Route path="leads" element={<CRMLeads />} />
            <Route path="leads/:id" element={<CRMLeadDetail />} />
            <Route path="pipeline" element={<CRMLeadPipeline />} />
            <Route path="followups" element={<CRMFollowUps />} />
            <Route path="admissions" element={<CRMAdmissions />} />
            <Route path="students" element={<CRMStudents />} />
            <Route path="marketing/*" element={<CRMMarketing />} />
            <Route path="reports" element={<CRMReports />} />
            <Route path="users" element={<CRMStaffUsers />} />
            <Route path="settings" element={<CRMSettings />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function AnimatedRoutes({
  openAdmissionModal,
  openVirtualTour,
  openChairmanModal,
  openDedicatedTopic,
  openModule,
  openPortalFrame,
  openCareerModal,
  openChatbot,
  openLoginModal,
}) {
  const location = useLocation();

  useEffect(() => {
    // Scroll reveal observer (triggers distinct slide-in as user scrolls cards into viewport view)
    let observer = null;

    const setupObserver = () => {
      const revealEls = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right",
      );

      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active-reveal");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );

      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("active-reveal");
        } else {
          observer.observe(el);
        }
      });
    };

    setupObserver();

    // Re-check after lazy components load
    const timer = setTimeout(setupObserver, 250);

    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <Suspense fallback={<PageLoadingSpinner message="Loading page..." />}>
      <Routes>
        {/* Public Site Pages */}
        <Route
          path="/"
          element={
            <HomePage
              openAdmissionModal={openAdmissionModal}
              openVirtualTour={openVirtualTour}
              openChairmanModal={openChairmanModal}
              openDedicatedTopic={openDedicatedTopic}
              openModule={openModule}
              openPortalFrame={openPortalFrame}
              openCareerModal={openCareerModal}
              openChatbot={openChatbot}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              openChairmanModal={openChairmanModal}
              openAdmissionModal={openAdmissionModal}
            />
          }
        />
        <Route
          path="/academics"
          element={<AcademicsPage openAdmissionModal={openAdmissionModal} />}
        />
        <Route
          path="/facilities"
          element={
            <FacilitiesPage
              openDedicatedTopic={openDedicatedTopic}
              openAdmissionModal={openAdmissionModal}
            />
          }
        />
        <Route
          path="/admissions"
          element={<AdmissionsPage openAdmissionModal={openAdmissionModal} />}
        />
        <Route
          path="/smart-campus"
          element={
            <SmartCampusPage
              openModule={openModule}
              openPortalFrame={openPortalFrame}
            />
          }
        />
        <Route
          path="/portals"
          element={
            <PortalsPage
              openPortalFrame={openPortalFrame}
              openLoginModal={openLoginModal}
            />
          }
        />
        <Route
          path="/careers"
          element={<CareersPage openCareerModal={openCareerModal} />}
        />
        <Route
          path="/contact"
          element={<ContactPage openChatbot={openChatbot} />}
        />
        <Route
          path="/news"
          element={<NewsEventsPage openAdmissionModal={openAdmissionModal} />}
        />
        <Route
          path="/news-events"
          element={<NewsEventsPage openAdmissionModal={openAdmissionModal} />}
        />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />

        {/* Authentication & Authorization Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Admin CRM Protected Routes */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute allowedRoles={["admin", "Super Admin", "Admin", "Counsellor", "Admission Staff"]}>
              <CRMLayout />
            </PrivateRoute>
          }
        />
        <Route
          path="/principal/dashboard"
          element={
            <PrivateRoute allowedRoles={["admin", "principal"]}>
              <PrincipalDashboard />
            </PrivateRoute>
          }
        />
        {/* Teacher Portal Protected Routes */}
        <Route
          path="/teacher/dashboard"
          element={
            <PrivateRoute allowedRoles={["admin", "principal", "teacher", "Teacher"]}>
              <TeacherDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <PrivateRoute allowedRoles={["admin", "principal", "teacher", "Teacher"]}>
              <TeacherDashboard />
            </PrivateRoute>
          }
        />

        {/* Protected Student Portal Routes */}
        <Route
          path="/student/dashboard"
          element={
            <PrivateRoute allowedRoles={["admin", "Super Admin", "principal", "student", "Student"]}>
              <StudentDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />

        {/* Public Parent Portal Routes */}
        <Route path="/parent/dashboard" element={<ParentDashboard />} />
        <Route path="/parent" element={<Navigate to="/parent/dashboard" replace />} />
        <Route path="/citizen/dashboard" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

function MainLayout() {
  const location = useLocation();
  const [modalState, setModalState] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Check if current route is a standalone dashboard or login page
  const isDashboardOrAuthPage =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/student") ||
    location.pathname.startsWith("/teacher") ||
    location.pathname.includes("/dashboard") ||
    location.pathname === "/login" ||
    location.pathname === "/unauthorized";

  const openAdmissionModal = (mode = "apply") => {
    setModalState({ type: "admission", data: { mode } });
  };

  const openLoginModal = (activeKey = "parent") => {
    setModalState({ type: "login", data: { activeKey } });
  };

  const openModule = (moduleKey) => {
    setModalState({ type: "module", data: { moduleKey } });
  };

  const openPortalFrame = (portalKey) => {
    setModalState({ type: "portalFrame", data: { portalKey } });
  };

  const openChairmanModal = () => {
    setModalState({ type: "chairman", data: {} });
  };

  const openCareerModal = (role) => {
    setModalState({ type: "career", data: { role } });
  };

  const openDedicatedTopic = (topicKey) => {
    setModalState({ type: "topic", data: { topicKey } });
  };

  const openVirtualTour = () => {
    alert(
      "Virtual Campus Tour: In the full production version this opens an immersive 360° / video tour of the 10-acre campus, smart classrooms, labs, hostels and sports facilities. For this demo, please visit the campus or contact admissions.",
    );
  };

  const closeModal = () => {
    setModalState(null);
  };

  return (
    <div className="min-h-screen bg-cream-50 font-sans relative flex flex-col justify-between">
      <Preloader />
      <TopRouteLoader />

      {!isDashboardOrAuthPage && (
        <Navbar
          openLoginModal={openLoginModal}
          openAdmissionModal={openAdmissionModal}
        />
      )}

      <main className="flex-1">
        <AnimatedRoutes
          openAdmissionModal={openAdmissionModal}
          openVirtualTour={openVirtualTour}
          openChairmanModal={openChairmanModal}
          openDedicatedTopic={openDedicatedTopic}
          openModule={openModule}
          openPortalFrame={openPortalFrame}
          openCareerModal={openCareerModal}
          openChatbot={() => setChatbotOpen(true)}
          openLoginModal={openLoginModal}
        />
      </main>

      {!isDashboardOrAuthPage && <Footer />}

      {!isDashboardOrAuthPage && (
        <AIChatbot isOpen={chatbotOpen} setIsOpen={setChatbotOpen} />
      )}

      <Modals
        modalState={modalState}
        closeModal={closeModal}
        openLoginModal={openLoginModal}
        openPortalFrame={openPortalFrame}
        openAdmissionModal={openAdmissionModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <MainLayout />
      </Router>
    </AuthProvider>
  );
}
