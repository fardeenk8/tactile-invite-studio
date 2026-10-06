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
    const seal = screen.getByRole('button', { name: 'Open Clara and Julien’s wedding invitation' });
    fireEvent.click(seal);
    expect(seal).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent('The envelope is opening.');
    act(() => vi.advanceTimersByTime(4300));
    expect(screen.getByRole('status')).toHaveTextContent('Your invitation is open.');
    fireEvent.click(screen.getByRole('button', { name: 'Close and reopen the invitation' }));
    expect(screen.getByRole('button', { name: 'Open Clara and Julien’s wedding invitation' })).toBeEnabled();
  });

  it('honors reduced motion with a short opening', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    render(<OpeningExperience />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Clara and Julien’s wedding invitation' }));
    act(() => vi.advanceTimersByTime(180));
    expect(screen.getByRole('status')).toHaveTextContent('Your invitation is open.');
  });
});