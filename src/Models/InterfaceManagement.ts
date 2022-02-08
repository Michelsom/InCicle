export interface ManagementProps {
  boards: DataModels[];
}
export interface DataModels {
  title: string;
  resume_files: resume_files[];
}
export interface resume_files {
  file: string;
}
