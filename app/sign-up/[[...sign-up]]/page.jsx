"use client"
import Privacy from '@/components/Privacy'
import Terms from '@/components/Terms'
import { SignUp } from '@clerk/nextjs'
import { useState } from 'react';

export default function Page() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignUp = () => {
    if (!acceptedTerms) {
      alert("You must accept the terms.");
      return;
    }
    // Proceed with sign-up
  };
  return 
  <div className="flex items-center justify-center h-screen w-full" >
    <div style={{ marginTop: '10px', fontSize: '14px' }}>
      By signing up, you agree to our 
      <Privacy />
      <Terms/>
    </div>
    <SignUp onSubmit={handleSignUp} />
    
</div>
}