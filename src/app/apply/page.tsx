"use client";

import { ArrowRight, Zap, Clock, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ApplyForm from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ApplyForm />
    </div>
  );
}
