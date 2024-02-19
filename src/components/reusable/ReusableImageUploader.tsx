import React, {useState, useEffect, FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  MediaType,
} from 'react-native-image-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/reusable/ReusableImageUploader.styles';
import {uploadImage} from '../../services/apiServices';
import {getAccessTokens} from '../../utils/appUtils';

interface ImageType {
  id: number;
  localUri: string | null;
  uploaded: boolean;
  description: string | null;
}

interface InitialImageType {
  id: number;
  url: string | null;
  description: string | null;
}

interface ReusableImageUploaderProps {
  initialImages: InitialImageType[];
  onUploadComplete: () => void;
}

const ReusableImageUploader: FC<ReusableImageUploaderProps> = ({
  initialImages,
  onUploadComplete,
}) => {
  const [images, setImages] = useState<ImageType[]>(
    initialImages
      .map(img => ({
        id: img.id,
        localUri: img.url,
        uploaded: img.url ? true : false,
        description: img.description,
      }))
      .concat(
        Array(6 - initialImages.length).fill({
          id: -1,
          localUri: null,
          uploaded: false,
          description: null,
        }),
      ),
  );

  const handleSelectImage = async (index: number) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        const updatedImages = [...images];
        updatedImages[index] = {
          ...updatedImages[index],
          localUri: asset.uri ?? null, // Use null as fallback if asset.uri is undefined
          uploaded: false,
        };
        setImages(updatedImages);

        try {
          const tokens = await getAccessTokens();
          if (tokens && tokens.accessToken) {
            await uploadImage(
              {
                uri: asset.uri,
                type: asset.type ?? 'image/jpeg',
                name: asset.fileName ?? `upload_${Date.now()}`,
              },
              tokens.accessToken,
            );

            updatedImages[index].uploaded = true;
            setImages([...updatedImages]);
            onUploadComplete();
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageGrid}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imagePlaceholder}
              onPress={() => handleSelectImage(index)}>
              {image.localUri ? (
                <Image source={{uri: image.localUri}} style={styles.image} />
              ) : (
                <FontAwesomeIcon icon={faCamera} size={24} color="#000" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ReusableImageUploader;
