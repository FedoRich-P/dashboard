'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';
import { InputField } from '@/components/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { modalsFormSchema } from '@/components/forms/modalsFormSchema';

type Inputs = z.infer<typeof modalsFormSchema>;

type Props = {
  role: string;
  type: 'create' | 'update';
  data?: any
}

export default function ModalsForm({ type, data, role }:Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(modalsFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h2 className="text-xl font-semibold">Create a new {role}</h2>
      <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
      <ul className="flex justify-between flex-wrap gap-2">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField label="Email" name="email" defaultValue={data?.email} register={register} error={errors?.email} />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </ul>
      <span className="text-xs text-gray-400 font-medium">Personal Information</span>
      <ul className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register('sex')}
            defaultValue={data?.sex}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register('img')} className="hidden" />
          {errors.img?.message && <p className="text-xs text-red-400">{errors.img.message.toString()}</p>}
        </div>
      </ul>
      <button className="bg-blue-400 text-white p-2 rounded-md">{type === 'create' ? 'Create' : 'Update'}</button>
    </form>
  );
}
