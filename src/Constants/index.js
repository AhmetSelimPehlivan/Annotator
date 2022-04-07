import RenderToolIcon from '../Assets/render.png';
import SelectToolIcon from '../Assets/select.png';
import VideoCutToolIcon from '../Assets/video-cut.png';
import AudioAddToolIcon from '../Assets/audio-add.png';
import {TOOL_TYPES} from './toolTypes';

export const IMAGE_TYPE = {
  icon: 'LOGO/ICON',
  image: 'LOGO/IMAGE'
};


export const TOOL_ICONS = {
  [TOOL_TYPES.RENDER]: {
    Icon: RenderToolIcon
  },
  [TOOL_TYPES.SELECT]: {
    Icon: SelectToolIcon
  },
  [TOOL_TYPES.VIDEO_CUT]: {
    Icon: VideoCutToolIcon
  },
  [TOOL_TYPES.AUDIO_ADD]: {
    Icon: AudioAddToolIcon
  }
};