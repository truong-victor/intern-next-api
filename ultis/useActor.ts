import { STORAGE_KEY } from '@/const/app-const'
import { useRouter } from 'next/router'
export const useActor = () => {
	const router = useRouter()
	const actor = router.pathname.split('/')[1]
	return actor
}

function getSessionStorageItem(key: string) {
	if (typeof window !== 'undefined' && window.sessionStorage) {
		return window.sessionStorage.getItem(key)
	}
	return null
}

export const localToken = () => getSessionStorageItem(STORAGE_KEY.LOCAL_USER)
