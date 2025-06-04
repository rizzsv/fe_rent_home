"use client";

import SettingForm from '@/components/SettingForm';
import {
  useGetAuthUserQuery,
  useUpdateManagerSettingsMutation,
  
} from "@/state/api";
import React from "react";

const TenantSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  console.log("authnya nih: ", authUser);
  const [updateManagers] = useUpdateManagerSettingsMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    try {
      console.log("sending update:",
      await updateManagers({
        cognitoId: authUser?.cognitoInfo?.userId,
        ...data,
      }))
      alert("Tenant settings updated successfully!");
    } catch (error) {
      console.error("Error updating tenant settings:", error);
      alert("Failed to update tenant settings. Please try again.");
    }
  };

  return (
    <SettingForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="manager"
    />
  );
};

export default TenantSettings;
