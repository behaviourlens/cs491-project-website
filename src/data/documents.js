// Course deliverables, listed per semester in course schedule order.
//
// Fields:
//   title          Official deliverable name (required)
//   semester       'CS491' or 'CS492' (required)
//   status         'upcoming' or 'available' (required)
//   category       e.g. 'Report', 'Form', 'Presentation'
//   dueDate        'YYYY-MM-DD', shown for upcoming items
//   submittedDate  'YYYY-MM-DD', shown for available items
//   file           Path in public/ without a leading slash, e.g. 'documents/analysis-report.pdf'
//   url            External URL, used instead of `file`
//   description    Short description
//
// To publish a deliverable: put the PDF in public/documents/, then set its
// status to 'available' and fill in `file` (and optionally `submittedDate`).
//
// Example entries:
//   {
//     title: 'Official Deliverable Name',
//     semester: 'CS491',
//     category: 'Report',
//     status: 'upcoming',
//     dueDate: '2026-11-20',
//   },
//   {
//     title: 'Official Deliverable Name',
//     semester: 'CS491',
//     category: 'Report',
//     status: 'available',
//     submittedDate: '2026-11-20',
//     file: 'documents/official-deliverable-name.pdf',
//   },
export const documents = [];
