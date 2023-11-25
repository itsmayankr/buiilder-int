    // Customizable Area Start    
    import React, {useCallback, useEffect, useMemo, useState} from 'react';
    import {
      ImageErrorEventData,
      NativeSyntheticEvent,
      StyleSheet,
      View,
      Image as CoreImage,
      ImageProps as CoreImageProps,
      ViewProps,
      ActivityIndicator,
    
      ActivityIndicatorProps,
    
    } from 'react-native';
    import { COLORS } from './Globals';
    
    export type ImageProps = CoreImageProps & {
      container?: ViewProps;
      spinner?: ActivityIndicatorProps;
    };
    
    export const Image = (props: ImageProps) => {
      const [loading, setLoading] = useState<boolean>(false);
      const [error, setError] =
        useState<NativeSyntheticEvent<ImageErrorEventData> | null>(null);
    
      useEffect(() => {
        setError(null);
      }, []);
    
      const onErrorHandler = useCallback(
        function (err) {
          setError(err);
          setLoading(false);
          props?.onError?.(err);
        },
        [props],
      );
    
      const onLoadStart = useCallback(
        function () {
          
          setLoading(true);
          props?.onLoadStart?.();
        },
        [props],
      );
    
      const onLoadEnd = useCallback(
        function () {
          setLoading(false);
          props?.onLoadEnd?.();
        },
        [props],
      );
    
      const onLoad = useCallback(
        function (event) {
          setLoading(false);
          setError(null);
          props?.onLoad?.(event);
        },
        [props],
      );
    
      const memoizedContainerStyle = useMemo(
        function () {
          return [styles.container, props.container?.style];
        },
        [props.container?.style],
      );
    
      const memoizeImageStyle = useMemo(
        function () {
          return [styles.image, props?.style];
        },
        [props?.style],
      );
      const memoizedSpinnerStyle = useMemo(
        function () {
          return [styles.spinner, props.spinner?.style];
        },
        [props.spinner?.style],
      );
    
    
      return (
        <View {...props.container} style={memoizedContainerStyle}>
          {loading ? <ActivityIndicator size={'small'}  color={COLORS.darkGray}{...props.spinner} style={memoizedSpinnerStyle} /> : null}
          {!error ? (
            <CoreImage
              {...props}
              style={memoizeImageStyle}
              onError={onErrorHandler}
              onLoadStart={onLoadStart}
              onLoadEnd={onLoadEnd}
              onLoad={onLoad}
            />
          ) : null}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        //position: 'absolute',
      },spinner:{
        position:'absolute',
        alignSelf:'center',
        elevation:111,
        zIndex:111,
        
        
      }
    });
       // Customizable Area End