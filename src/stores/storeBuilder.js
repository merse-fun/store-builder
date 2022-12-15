import create from 'zustand'
import produce from 'immer'

export const useStoreBuilderStore = create((set) => ({
  position: { x: 0, z: 0 },
  updatePosition: (updatedPosition) => set(() => ({ position: { x: updatedPosition.x, z: updatedPosition.z } })),

  blocks: [],
  addBlock: (newBlock) => set((state) => ({ blocks: [...state.blocks, newBlock] })),
  updateBlock: (payload) =>
    set((state) => {
      const allBlocks = [...state.blocks]
      allBlocks[payload.id].position = payload.position
      return allBlocks
    }),

  isEditing: false,
  setIsEditing: (isEdit) => set(() => ({ isEditing: isEdit })),
}))
