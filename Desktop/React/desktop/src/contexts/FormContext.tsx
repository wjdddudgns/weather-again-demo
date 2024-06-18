import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  title: string;
  author: string;
  publisher: string;
  pages: number;
  date: string;
  content: string;
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface FormProviderProps {
  children: ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    author: '',
    publisher: '',
    pages: 0,
    date: '',
    content: ''
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
