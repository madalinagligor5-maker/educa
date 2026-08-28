import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, HeadingLevel } from "docx";
import { FullDayPackage } from "@/data/demoWeek";

export async function exportDayPlanToDocx(plan: FullDayPackage) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header
          new Paragraph({
            text: "PROIECT DIDACTIC INTEGRAT — ZIUA COMPLETE",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "Platforma EduZori — Platforma educatoarei organizate și inspirate\n", italics: true, size: 20 }),
              new TextRun({ text: `Grupa: ${plan.gradeLevel} | Data: ${plan.date}\n`, bold: true }),
              new TextRun({ text: `Tema Anuală: ${plan.theme}\n` }),
              new TextRun({ text: `Subtema: ${plan.subtheme}\n\n` }),
            ],
          }),

          // Section 1: ADP
          new Paragraph({
            text: "I. ACTIVITĂȚI DE DEZVOLTARE PERSONALĂ (ADP)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Salutul & Mesajul Zilei: ", bold: true }),
              new TextRun({ text: plan.adpMorningMeeting.greeting + "\n" }),
              new TextRun({ text: "• Prezența: ", bold: true }),
              new TextRun({ text: plan.adpMorningMeeting.presence + "\n" }),
              new TextRun({ text: "• Calendarul Naturii: ", bold: true }),
              new TextRun({ text: plan.adpMorningMeeting.calendar + "\n" }),
              new TextRun({ text: "• Socio-Emoțional (SEL): ", bold: true }),
              new TextRun({ text: plan.adpMorningMeeting.selActivity + "\n" }),
            ],
          }),

          // Section 2: ADE
          new Paragraph({
            text: `II. ACTIVITATE PE DOMENII EXPERIENȚIALE (${plan.adePlan.domain})`,
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: `Titlu: `, bold: true }),
              new TextRun({ text: `${plan.adePlan.title}\n` }),
              new TextRun({ text: `Mijloc de realizare: `, bold: true }),
              new TextRun({ text: `${plan.adePlan.realizationMeans}\n` }),
              new TextRun({ text: `Tipul activității: `, bold: true }),
              new TextRun({ text: `${plan.adePlan.type}\n` }),
            ],
          }),

          new Paragraph({
            text: "Obiective Operaționale:",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 150, after: 50 },
          }),
          ...plan.adePlan.objectives.cognitive.map(
            (o) => new Paragraph({ text: `• Cognitive: ${o}`, bullet: { level: 0 } })
          ),
          ...plan.adePlan.objectives.psychomotor.map(
            (o) => new Paragraph({ text: `• Psihomotorii: ${o}`, bullet: { level: 0 } })
          ),
          ...plan.adePlan.objectives.socioAffective.map(
            (o) => new Paragraph({ text: `• Socio-Afective: ${o}`, bullet: { level: 0 } })
          ),

          new Paragraph({
            text: "Tabel Desfășurarea Activității:",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 },
          }),

          // Steps Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Etapa", bold: true })] })], width: { size: 20, type: WidthType.PERCENTAGE } }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Activitatea Educatoarei", bold: true })] })], width: { size: 35, type: WidthType.PERCENTAGE } }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Activitatea Copiilor", bold: true })] })], width: { size: 30, type: WidthType.PERCENTAGE } }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Evaluare", bold: true })] })], width: { size: 15, type: WidthType.PERCENTAGE } }),
                ],
              }),
              ...plan.adePlan.stepsTable.map(
                (step) =>
                  new TableRow({
                    children: [
                      new TableCell({ children: [new Paragraph(step.step)] }),
                      new TableCell({ children: [new Paragraph(step.teacherActivity)] }),
                      new TableCell({ children: [new Paragraph(step.childrenActivity)] }),
                      new TableCell({ children: [new Paragraph(step.evaluation)] }),
                    ],
                  })
              ),
            ],
          }),

          // Section 3: ALA1
          new Paragraph({
            text: "III. ACTIVITĂȚI LIBER-ALESE (ALA 1 - Centre de Interes)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 100 },
          }),
          ...plan.ala1Centers.map(
            (c) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `• Centrul ${c.center}: `, bold: true }),
                  new TextRun({ text: `${c.task} (Materiale: ${c.materials})` }),
                ],
              })
          ),

          // Section 4: ALA2
          new Paragraph({
            text: "IV. ACTIVITĂȚI RECREATIVE ȘI DE MIȘCARE (ALA 2)",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 100 },
          }),
          ...plan.ala2Games.map(
            (g) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `• ${g.title}: `, bold: true }),
                  new TextRun({ text: `${g.description}` }),
                ],
              })
          ),

          // Section 5: Condică Summary
          new Paragraph({
            text: "V. SINCRONIZARE CONDICĂ DE EVIDENȚĂ",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Sumar activități: ", bold: true }),
              new TextRun({ text: plan.condicaSummary.activitySummary }),
            ],
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Proiect_Didactic_${plan.theme.replace(/[^a-zA-Z0-9]/g, "_")}.docx`;
  a.click();
  window.URL.revokeObjectURL(url);
}
