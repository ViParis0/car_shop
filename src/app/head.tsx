import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-around p-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
