import { Mail } from 'lucide-react'

import { Label } from './ui/label'

export function JoinEmailList() {
  // label: Join our email list, we are already 10,000+
  // input with left mail icon
  // placeholder: Your email address

  return (
    <form className="flex w-full flex-col items-start gap-2 md:max-w-sm">
      <p className="text-md">Join our email list, we are already 10,000+</p>
      <Label
        htmlFor="email"
        className="flex h-12 w-full items-center gap-2 rounded-lg border-b bg-white p-3"
      >
        <Mail size={16} />
        <input
          id="email"
          type="email"
          name="EMAIL"
          placeholder="Your email address"
          className="w-full bg-transparent tracking-tight outline-none"
        />
      </Label>
    </form>
  )
}
