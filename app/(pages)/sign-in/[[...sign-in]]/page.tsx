import { SignIn } from '@clerk/nextjs'

function Signin() {
  return (
    <div className="flex items-center justify-center h-full">
   <SignIn />
    </div>
  )
}

export default Signin
