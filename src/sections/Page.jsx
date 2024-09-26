import React from "react";
import { UserButton } from "@clerk/clerk-react";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      width="16"
      height="16"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

export default function Home() {
  return (
    <header
      style={{
        position: "relative",
        marginBottom: 25,
        marginLeft: 15,
        backgroundColor: "rgba(44,241,255,0)",
        color: "white",
      }}
    >
      <UserButton
        appearance={{
          elements: {
            avatarBox: {
              width: "3rem",
              height: "3rem",
            },

            userButtonPopoverCard: {
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            },
            userButtonOuterIdentifier: {
              color: "#fff",
              fontSize: "16px",
            },
          },
          variables: {
            colorPrimary: "#4a90e2",
            colorText: "#ffffff",
            colorTextSecondary: "#d0caca",
          },
        }}
        showName={true}
      >
        <UserButton.MenuItems>
          <UserButton.Action label="signOut" />
          <UserButton.Link
            label="Create organization"
            labelIcon={<DotIcon />}
            href="/create-organization"
          />
          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>
      </UserButton>
    </header>
  );
}
