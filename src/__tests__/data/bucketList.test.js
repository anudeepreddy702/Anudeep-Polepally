import { describe, it, expect } from 'vitest'
import { bucketList } from '../../data/bucketList'

describe('bucketList data', () => {
    it('should be an array', () => {
        expect(Array.isArray(bucketList)).toBe(true)
    })

    it('should have items', () => {
        expect(bucketList.length).toBeGreaterThan(0)
    })

    it('should have valid structure for each item', () => {
        bucketList.forEach(item => {
            expect(item).toHaveProperty('id')
            expect(item).toHaveProperty('text')
            expect(item).toHaveProperty('completed')
            expect(typeof item.id).toBe('number')
            expect(typeof item.text).toBe('string')
            expect(typeof item.completed).toBe('boolean')
        })
    })

    it('should have unique IDs', () => {
        const ids = bucketList.map(item => item.id)
        const uniqueIds = new Set(ids)
        expect(ids.length).toBe(uniqueIds.size)
    })

    it('should have some completed items', () => {
        const completedItems = bucketList.filter(item => item.completed)
        expect(completedItems.length).toBeGreaterThan(0)
    })

    it('should have some incomplete items', () => {
        const incompleteItems = bucketList.filter(item => !item.completed)
        expect(incompleteItems.length).toBeGreaterThan(0)
    })

    it('should have valid image data for items with images', () => {
        const itemsWithImages = bucketList.filter(item => item.image)
        itemsWithImages.forEach(item => {
            expect(item.image).toBeTruthy()
            expect(item.alt).toBeTruthy()
            expect(item.caption).toBeTruthy()
        })
    })

    it('should have valid Spotify embed for items with spotifyEmbed', () => {
        const itemsWithSpotify = bucketList.filter(item => item.spotifyEmbed)
        itemsWithSpotify.forEach(item => {
            expect(item.spotifyEmbed).toContain('spotify.com')
        })
    })
})
