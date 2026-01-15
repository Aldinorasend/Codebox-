import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignIn
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
          path="/sign-in"
          signUpUrl="/signup"
          redirectUrl="/"
        />
      </div>
    </div>
  );
}
