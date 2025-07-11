import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogOut, User, Calendar, Settings } from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">
                  Welcome back, {user?.name}!
                </p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user?.name}</div>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </CardContent>
          </Card>

          {/* Account Status Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Account Status
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Active</div>
              <p className="text-xs text-muted-foreground">
                Your account is verified
              </p>
            </CardContent>
          </Card>

          {/* Member Since Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Member Since
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "Today"}
              </div>
              <p className="text-xs text-muted-foreground">Account created</p>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              You have successfully logged in to your account. This is a
              protected area that requires authentication.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                This dashboard demonstrates a complete authentication system
                with the following features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>User registration with validation</li>
                <li>Secure login with JWT tokens</li>
                <li>Password hashing with bcrypt</li>
                <li>MongoDB database integration</li>
                <li>Protected routes and authentication context</li>
                <li>Responsive design for all screen sizes</li>
                <li>Modern UI with Tailwind CSS and Radix UI</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can now explore the application and build upon this
                foundation to create your own features.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
