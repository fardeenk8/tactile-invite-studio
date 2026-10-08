import { act, fireEvent, render, screen, cleanup } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { OpeningExperience } from '@/components/invitation/opening-experience';

describe('Invitation opening', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    vi.stubGlobal('scrollTo', vi.fn());
  });
  afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });

  it('opens once from the seal, reveals the invitation, and can be closed again', () => {
    render(<OpeningExperience />);
    const seal = screen.getByRole('button', { name: 'Open Emma and James’s wedding invitation' });
    fireEvent.click(seal);
    expect(seal).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent('The envelope is opening.');
    act(() => vi.advanceTimersByTime(4300));
    expect(screen.getByRole('status')).toHaveTextContent('Your invitation is open.');
    fireEvent.click(screen.getByRole('button', { name: 'Close and reopen the invitation' }));
    expect(screen.getByRole('button', { name: 'Open Emma and James’s wedding invitation' })).toBeEnabled();
  });

  it('honors reduced motion with a short opening', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    render(<OpeningExperience />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Emma and James’s wedding invitation' }));
    act(() => vi.advanceTimersByTime(180));
    expect(screen.getByRole('status')).toHaveTextContent('Your invitation is open.');
  });

  it('reveals the botanical celebration and offers an honest RSVP preview', () => {
    render(<OpeningExperience />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Emma and James’s wedding invitation' }));
    act(() => vi.advanceTimersByTime(4300));
    expect(screen.getByRole('heading', { name: 'Kindly reply' })).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Your full name'), { target: { value: 'Sample Guest' } });
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'guest@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Preview response' }));
    expect(screen.getByText('A lovely yes.')).toBeInTheDocument();
    expect(screen.getByText(/Your response has not been sent/)).toBeInTheDocument();
  });
});