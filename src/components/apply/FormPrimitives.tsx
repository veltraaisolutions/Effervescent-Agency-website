"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { AlertCircle, ChevronDown, Check } from "lucide-react";

export function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3 ml-1">
      {children}
      {required && <span className="text-primary ml-1">*</span>}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-xs text-red-500 flex items-center gap-2 font-medium px-1">
      <AlertCircle className="w-3 h-3 flex-shrink-0" />
      {message}
    </p>
  );
}

export function TextInput({ value, onChange, placeholder = "", type = "text", disabled = false }: any) {
  return (
    <input
      type={type} value={value} placeholder={placeholder} disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-6 py-4.5 border border-slate-100 rounded-2xl text-base bg-slate-50 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all duration-300 placeholder:text-slate-300"
    />
  );
}

export function TextareaInput({ value, onChange, placeholder = "", rows = 4 }: any) {
  return (
    <textarea
      value={value} rows={rows} placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-6 py-5 border border-slate-100 rounded-3xl text-base bg-slate-50 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all duration-300 resize-none placeholder:text-slate-300"
    />
  );
}

export function SelectInput({ value, onChange, options, placeholder = "Select…" }: any) {
  return (
    <div className="relative group">
      <select
        value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none px-6 py-4.5 border border-slate-100 rounded-2xl text-base bg-slate-50 text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all duration-300"
      >
        <option value="">{placeholder}</option>
        {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-primary transition-colors pointer-events-none" />
    </div>
  );
}

export function YesNoToggle({ value, onChange }: any) {
  return (
    <div className="flex gap-4">
      {(["yes", "no"] as const).map((opt) => (
        <button
          key={opt} type="button" onClick={() => onChange(opt)}
          className={`flex-1 px-8 py-4.5 rounded-2xl text-sm font-black uppercase tracking-widest border transition-all duration-300 ${value === opt 
            ? "bg-slate-900 border-slate-900 text-white shadow-premium -translate-y-0.5" 
            : "bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100 hover:text-slate-600"}`}
        >
          {opt === "yes" ? "Yes" : "No"}
        </button>
      ))}
    </div>
  );
}

export function RadioGroup({ options, value, onChange }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {options.map((opt: string) => (
        <button
          key={opt} type="button" onClick={() => onChange(opt)}
          className={`flex items-center gap-4 px-6 py-5 rounded-2xl border text-sm font-bold text-left transition-all duration-300 ${value === opt 
            ? "border-primary bg-primary/5 text-slate-900 shadow-soft" 
            : "border-slate-100 bg-slate-50 text-slate-400 hover:bg-slate-100"}`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${value === opt ? "border-primary" : "border-slate-200"}`}>
            {value === opt && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
          </div>
          {opt}
        </button>
      ))}
    </div>
  );
}

export function StyledCheckbox({ checked, onCheckedChange, id, label }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
      <CheckboxPrimitive.Root
        id={id} checked={checked} onCheckedChange={(v) => onCheckedChange(!!v)}
        className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${checked ? "bg-primary border-primary shadow-glow" : "border-slate-200 bg-white"}`}
      >
        <CheckboxPrimitive.Indicator><Check className="w-4 h-4 text-white" strokeWidth={4} /></CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id} className="text-sm font-medium text-slate-500 group-hover:text-slate-900 cursor-pointer leading-relaxed transition-colors">{label}</label>
    </div>
  );
}

