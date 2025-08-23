import React, { useEffect, useState } from "react";
import { Card, Avatar, Descriptions, Button, Spin } from "antd";
import { EditOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { request } from "../../api";
import { FiUpload } from "react-icons/fi";

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");

    request
      .get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card
        style={{ width: "95%" }}
        className="shadow-xl rounded-2xl"
        actions={[
          <Button type="primary" icon={<EditOutlined />} key="edit">
            Edit Profile
          </Button>,
          <Button icon={<UploadOutlined />} key="resume">
            Upload Resume
          </Button>,
        ]}
      >
        <div className="flex flex-col items-center mb-6 relative">
          <Avatar
            size={120}
            src={data?.avatar || "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"}
            alt="profile"
            className="border-4 border-blue-500 shadow-md"
          />
          <label
            htmlFor="avatar-upload"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-[6px] cursor-pointer hover:bg-blue-600"
          >
            <FiUpload className="inline-block" /> Upload image
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">{data?.fullName}</h2>
          <p className="text-gray-500">@{data?.username}</p>
        </div>

        <Descriptions
          title="Profile Information"
          bordered
          column={1}
          labelStyle={{ fontWeight: "bold" }}
        >
          <Descriptions.Item label="Full Name">{data?.fullName}</Descriptions.Item>
          <Descriptions.Item label="Username">{data?.username}</Descriptions.Item>
          <Descriptions.Item label="Job">{data?.job || "Not specified"}</Descriptions.Item>
          <Descriptions.Item label="About">{data?.about || "No information"}</Descriptions.Item>
          <Descriptions.Item label="Role">{data?.role}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default React.memo(Profile);
