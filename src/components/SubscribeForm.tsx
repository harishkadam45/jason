import { useState, type FormEvent } from 'react';

interface Props {
  /** Mailchimp "Embedded form" action URL, e.g. https://xxx.us1.list-manage.com/subscribe/post?u=...&id=... */
  action?: string;
  /** Hidden honeypot field name from the Mailchimp embed code, e.g. b_<u>_<id> */
  honeypot?: string;
}

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function SubscribeForm({ action, honeypot }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!action) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const body = new URLSearchParams({ EMAIL: email });
      if (honeypot) body.set(honeypot, '');
      // Mailchimp doesn't send CORS headers, so the response is opaque; a resolved request means it was delivered.
      await fetch(action, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <p role="status" className="mx-auto max-w-xl rounded-2xl bg-white/10 px-6 py-4 font-semibold text-white">
        Thanks! Check your inbox to confirm your subscription.
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-full border-0 bg-white px-6 text-base text-navy-950 placeholder:text-slate-400"
        />
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary min-h-12 !bg-brand-500 hover:!bg-brand-400 disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-brand-200">
          Sorry, we couldn’t subscribe you right now. Please try again later.
        </p>
      )}
    </div>
  );
}
