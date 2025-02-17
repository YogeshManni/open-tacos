import { RecentImageCard } from '@/components/home/RecentMediaCard'
import { getMediaForFeed } from '@/js/graphql/api'

/**
 * Horizontal gallery of recent images with tags
 */
export const RecentTags: React.FC = async () => {
  const recentTagsByUsers = await getMediaForFeed(20, 4)
  const testAreaIds = Array.from(new Set((process.env.NEXT_PUBLIC_TEST_AREA_IDS ?? '').split(',')))
  const mediaWithTags = recentTagsByUsers.flatMap(entry => entry.mediaWithTags)

  const recentMediaWithTags = mediaWithTags.filter(tag => {
    return tag.entityTags.some(entityTag => {
      return testAreaIds.every(testId => {
        const regex = new RegExp(testId, 'g')
        return !regex.test(entityTag.ancestors)
      })
    })
  })

  return (
    <section className='max-w-5xl xl:max-w-7xl mx-auto px-4 xl:px-0'> 
      <div className='px-4 2xl:px-0 mx-auto max-w-5xl xl:max-w-7xl'>
        <h2>Latest Photos</h2>
      </div>

      <div className='overflow-hidden bg-base-200/20'>
        <hr className='border-2 border-base-content' />
        <div className='py-8 grid grid-flow-col auto-cols-max gap-x-4 overflow-x-auto'>
          {
                recentMediaWithTags.map(media => {
                  const { mediaUrl } = media
                  return (
                    <div
                      key={mediaUrl} className='w-64 first:pl-6 2xl:first:ml-16 last:mr-16'
                    >
                      <RecentImageCard mediaWithTags={media} bordered />
                    </div>
                  )
                }
                )
              }
        </div>
      </div>
    </section>
  )
}
