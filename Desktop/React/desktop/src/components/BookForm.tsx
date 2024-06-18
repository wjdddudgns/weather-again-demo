import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormContext } from '../contexts/FormContext';

const BookForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { formData, setFormData } = useFormContext();

  const onSubmit = (data: any) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">독서록 작성</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">제목</label>
          <input {...register('title')} defaultValue={formData.title} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">저자</label>
          <input {...register('author')} defaultValue={formData.author} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">출판사</label>
          <input {...register('publisher')} defaultValue={formData.publisher} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">페이지 수</label>
          <input type="number" {...register('pages')} defaultValue={formData.pages} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">읽은 날짜</label>
          <input type="date" {...register('date')} defaultValue={formData.date} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">즐거리 및 감상</label>
          <textarea {...register('content')} defaultValue={formData.content} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
        </div>
        <div className="flex justify-end space-x-2">
          <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md">취소</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">완료</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
