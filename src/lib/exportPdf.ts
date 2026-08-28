import { jsPDF } from "jspdf";
import { FullDayPackage } from "@/data/demoWeek";

export function exportDayPlanToPdf(plan: FullDayPackage) {
  const doc = new jsPDF();
  let y = 15;

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(75, 63, 53); // Charcoal #4B3F35
  doc.text("PROIECT DIDACTIC INTEGRAT", 105, y, { align: "center" });

  y += 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("EduZori — Platforma educatoarei organizate și inspirate", 105, y, { align: "center" });

  y += 12;
  doc.setLineWidth(0.5);
  doc.setDrawColor(231, 227, 223);
  doc.line(15, y, 195, y);

  y += 10;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(`Grupa: ${plan.gradeLevel}`, 15, y);
  doc.text(`Data: ${plan.date}`, 120, y);

  y += 7;
  doc.text(`Tema Anuală: ${plan.theme}`, 15, y);

  y += 7;
  doc.text(`Subtema: ${plan.subtheme}`, 15, y);

  y += 12;
  // Section 1: ADP
  doc.setFontSize(12);
  doc.setTextColor(255, 143, 126); // Coral #FF8F7E
  doc.text("1. Activități de Dezvoltare Personală (ADP)", 15, y);

  y += 7;
  doc.setFontSize(9);
  doc.setTextColor(75, 63, 53);
  doc.setFont("helvetica", "normal");
  const greetingLines = doc.splitTextToSize(`• Întâlnirea de dimineață: ${plan.adpMorningMeeting.greeting}`, 180);
  doc.text(greetingLines, 15, y);
  y += greetingLines.length * 5 + 4;

  const selLines = doc.splitTextToSize(`• Socio-Emoțional: ${plan.adpMorningMeeting.selActivity}`, 180);
  doc.text(selLines, 15, y);
  y += selLines.length * 5 + 8;

  // Section 2: ADE
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(168, 197, 161); // Sage #A8C5A1
  doc.text(`2. Domeniul Experiențial: ${plan.adePlan.domain}`, 15, y);

  y += 7;
  doc.setFontSize(9);
  doc.setTextColor(75, 63, 53);
  doc.setFont("helvetica", "normal");
  doc.text(`Titlu: ${plan.adePlan.title}`, 15, y);
  y += 5;
  doc.text(`Mijloc de realizare: ${plan.adePlan.realizationMeans}`, 15, y);

  y += 8;
  doc.setFont("helvetica", "bold");
  doc.text("Obiective Operaționale:", 15, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  plan.adePlan.objectives.cognitive.forEach((o) => {
    const lines = doc.splitTextToSize(`- ${o}`, 175);
    doc.text(lines, 20, y);
    y += lines.length * 4.5;
  });

  y += 6;
  // Section 3: ALA1 & ALA2
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(141, 123, 104); // Taupe #8D7B68
  doc.text("3. Activități Liber-Alese (ALA 1 & ALA 2)", 15, y);

  y += 7;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(75, 63, 53);
  plan.ala1Centers.forEach((c) => {
    const lines = doc.splitTextToSize(`• ${c.center}: ${c.task}`, 180);
    doc.text(lines, 15, y);
    y += lines.length * 4.5;
  });

  y += 10;
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(140, 140, 140);
  doc.text("Generat automat prin EduZori (eduzori.ro) — Platforma educatoarei organizate și inspirate", 105, 285, { align: "center" });

  doc.save(`Proiect_Didactic_${plan.theme.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`);
}
