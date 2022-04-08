import RenderToolIcon from '../Assets/render.png';
import SelectToolIcon from '../Assets/select.png';
import VideoCutToolIcon from '../Assets/video-cut.png';
import AudioAddToolIcon from '../Assets/audio-add.png';
import {TOOL_TYPES} from './toolTypes';

export const IMAGE_TYPE = {
  icon: 'LOGO/ICON',
  image: 'LOGO/IMAGE'
};


export const TOOL_ICONS = [
  {
    Name: TOOL_TYPES.RENDER,
    Icon: RenderToolIcon
  },
  {
    Name: TOOL_TYPES.SELECT,
    Icon: SelectToolIcon
  },
  {
    Name: TOOL_TYPES.VIDEO_CUT,
    Icon: VideoCutToolIcon
  },
  {
    Name: TOOL_TYPES.AUDIO_ADD,
    Icon: AudioAddToolIcon
  }
];