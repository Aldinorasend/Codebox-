import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            elements: {
              card: "shadow-none border-none",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-muted-foreground",
              formButtonPrimary:
                "bg-black hover:bg-black/90 text-white",
            },
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/login"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
