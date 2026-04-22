"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { AlertCircle, ChevronDown, Check } from "lucide-react";
import { BRAND_COLOR } from "@/lib/apply-utils";

export const onFocusBrand = (e: React.FocusEvent<any>) => {
  e.currentTarget.style.boxShadow = `0 0 0 2px ${BRAND_COLOR}55`;
  e.currentTarget.style.borderColor = BRAND_COLOR;
};

export const onBlurBrand = (e: React.FocusEvent<any>) => {
  e.currentTarget.style.boxShadow = "";
  e.currentTarget.style.borderColor = "";
};

export function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      {children}
      {required && <span style={{ color: BRAND_COLOR }} className="ml-0.5">*</span>}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
      <AlertCircle className="w-3 h-3 flex-shrink-0" />
      {message}
    </p>
  );
}

export function TextInput({ value, onChange, onBlur, placeholder = "", type = "text", disabled = false }: any) {
  return (
    <input
      type={type} value={value} placeholder={placeholder} disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => { onBlurBrand(e); onBlur?.(); }}
      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 text-slate-900 focus:outline-none transition-all"
      onFocus={onFocusBrand}
    />
  );
}

export function TextareaInput({ value, onChange, placeholder = "", rows = 4 }: any) {
  return (
    <textarea
      value={value} rows={rows} placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 text-slate-900 focus:outline-none resize-none transition-all"
      onFocus={onFocusBrand} onBlur={onBlurBrand}
    />
  );
}

export function SelectInput({ value, onChange, options, placeholder = "Select…" }: any) {
  return (
    <div className="relative">
      <select
        value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none px-3 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 text-slate-900 focus:outline-none transition-all"
        onFocus={onFocusBrand} onBlur={onBlurBrand}
      >
        <option value="">{placeholder}</option>
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
}

export function YesNoToggle({ value, onChange }: any) {
  return (
    <div className="flex gap-2">
      {(["yes", "no"] as const).map((opt) => (
        <button
          key={opt} type="button" onClick={() => onChange(opt)}
          style={value === opt ? { backgroundColor: BRAND_COLOR, borderColor: BRAND_COLOR, color: "white" } : {}}
          className={`px-6 py-2 rounded-xl text-sm font-semibold border transition-all ${value === opt ? "shadow-sm" : "bg-slate-50 text-slate-500 border-slate-200"}`}
        >
          {opt === "yes" ? "Yes" : "No"}
        </button>
      ))}
    </div>
  );
}

export function RadioGroup({ options, value, onChange }: any) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt: string) => (
        <button
          key={opt} type="button" onClick={() => onChange(opt)}
          style={value === opt ? { borderColor: BRAND_COLOR, backgroundColor: `${BRAND_COLOR}14` } : {}}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${value === opt ? "text-slate-900" : "border-slate-200 bg-slate-50 text-slate-500"}`}
        >
          <div style={value === opt ? { borderColor: BRAND_COLOR } : {}} className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center`}>
            {value === opt && <div style={{ backgroundColor: BRAND_COLOR }} className="w-2 h-2 rounded-full" />}
          </div>
          {opt}
        </button>
      ))}
    </div>
  );
}

export function StyledCheckbox({ checked, onCheckedChange, id, label }: any) {
  return (
    <div className="flex items-start gap-3">
      <CheckboxPrimitive.Root
        id={id} checked={checked} onCheckedChange={(v) => onCheckedChange(!!v)}
        style={checked ? { backgroundColor: BRAND_COLOR, borderColor: BRAND_COLOR } : {}}
        className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${checked ? "" : "border-slate-300 bg-slate-50"}`}
      >
        <CheckboxPrimitive.Indicator><Check className="w-3 h-3 text-white" strokeWidth={3} /></CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id} className="text-sm text-slate-600 cursor-pointer leading-relaxed">{label}</label>
    </div>
  );
}
