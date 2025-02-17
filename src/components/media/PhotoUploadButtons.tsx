import { Camera } from '@phosphor-icons/react/dist/ssr'
import { BaseUploaderWithNext13Context } from './BaseUploader'

export const UploadPhotoButton: React.FC<{status:string}> = ({status}) => (
  <BaseUploaderWithNext13Context className={`btn ${status === 'unauthenticated' && 'pointer-events-none opacity-50'}`}>
    <Camera size={20} /> <span className='hidden md:inline'>Photo</span>
  </BaseUploaderWithNext13Context>
)

export const UploadPhotoTextOnlyButton: React.FC = () => (
  <BaseUploaderWithNext13Context className='btn btn-outline btn-primary'>
    <span>Add photo</span>
  </BaseUploaderWithNext13Context>
)
