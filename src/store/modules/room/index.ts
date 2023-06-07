import { defineStore } from 'pinia'

interface RoomInfo {
  /**
   * cell code
   */
  cellCode?: string
  /**
   * 颜色，十六进制
   */
  color?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 房间 id
   */
  roomId?: number
  /**
   * 是否固定 false 否 true 是
   */
  isPinned?: boolean
  /**
   * 名称
   */
  name?: string
  // 是否是编辑状态
  isEdit?: boolean
}

export const useRoomStore = defineStore('room', {
  state() {
    return {
      roomInfo: <RoomInfo> {},
    }
  },
  getters: {
    roomData(): RoomInfo {
      return this.roomInfo || {}
    },
    cellCode(): string {
      return this.roomInfo.cellCode || ''
    },
    color(): string {
      return this.roomInfo.color || ''
    },
    createTime(): string {
      return this.roomInfo.createTime || ''
    },
    roomId(): number {
      return this.roomInfo.roomId || -1
    },
    name(): string {
      return this.roomInfo.name || ''
    },
  },
  actions: {
    setRoomInfo(roomInfo: RoomInfo = {}) {
      this.roomInfo = { ...this.roomInfo, ...roomInfo }
    },
  },
})
