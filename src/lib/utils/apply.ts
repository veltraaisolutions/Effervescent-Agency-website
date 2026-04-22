export function isAtLeast18(dob: string): boolean {
  if (!dob) return false;
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age >= 18;
}

export function normalizePhone(raw: string): string {
  let v = raw.trim().replace(/[\s\-().]/g, "");
  if (/^07\d{9}$/.test(v)) return "+44" + v.slice(1);
  if (/^\d{10,15}$/.test(v)) return "+" + v;
  return v;
}

export function isValidPhone(v: string): boolean {
  return /^\+\d{7,15}$/.test(v);
}

export function toBase64(file: File): Promise<string> {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result as string);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
